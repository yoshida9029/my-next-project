"use server";

//stateの方を定義（後でstateを設定する）
type ContactState = {
    status: "" | "success" | "error";
    message: string;
};

//メールアドレスの形式チェック関数
function validateEmail(email: string) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

// これ以降が、フォーム送信時に実行される関数(ServerActions本体)
export async function createContactData(
    _prevState: ContactState,
    formData: FormData
): Promise<ContactState> {
    const rawFormData = {
    lastname: formData.get("lastname") as string,
    firstname: formData.get("firstname") as string,
    company: formData.get("company") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
    };

    if (!rawFormData.lastname) {
    return { status: "error", message: "姓を入力してください" };
    }

    if (!rawFormData.firstname) {
    return { status: "error", message: "名を入力してください" };
    }

    if (!rawFormData.company) {
    return { status: "error", message: "会社名を入力してください" };
    }

    if (!rawFormData.email) {
    return { status: "error", message: "メールアドレスを入力してください" };
    }

    if (!validateEmail(rawFormData.email)) {
    return { status: "error", message: "メールアドレスの形式が誤っています" };
    }

    if (!rawFormData.message) {
    return { status: "error", message: "メッセージを入力してください" };
    }

    return {
    status: "success",
    message: "OK",
    };
}