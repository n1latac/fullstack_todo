import { exampleApi } from "../api/axios"

export function* createServerSaga(action){
    try {
        const result = yield exampleApi(action.counter)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}