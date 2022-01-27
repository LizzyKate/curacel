export const state = () => ({
    task: []
})

export const mutations = {
    getData(state, payload) {
        state.task = payload.map((e) => e)
    }
}
export const actions = {
    async getTasks({ commit }) {
        const res = await this.$axios.$get("/tasks")
        commit('getData', res)
    }
}