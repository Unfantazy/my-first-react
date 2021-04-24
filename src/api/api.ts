import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "6a14b24d-7bf6-4bbb-8259-3318664947f9"
    }
})

export const usersAPI = {
    getUsers(currentPage: any, pageSize: any) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId: string) {
        return instance
            .post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },

    unfollow(userId: string) {
        return instance
            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
}

