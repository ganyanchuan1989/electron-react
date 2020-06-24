import createReducer from '@/utils/createReducer'
import { ACTION_HANDLERS } from '@/redux/actions/counter'
import initState from '@/redux/store/initState'

export default createReducer(initState.counter, ACTION_HANDLERS)
