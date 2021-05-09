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
            .post(`follow/${userId}`)
    },
    unfollow(userId: string) {
        return instance
            .delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please, use profileAPI object')
        return profileAPI.getProfile(userId)
    },

}

export const profileAPI = {
    getProfile(userId: string) {
        return instance
            .get(`profile/` + userId)
    },
    getStatus(userId:string) {
        return instance
            .get(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance
            .put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}
