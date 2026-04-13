import {redirect} from "next/navigation";

export default async function Page() {
    // 将/session重定向到/
    return redirect('/')
}