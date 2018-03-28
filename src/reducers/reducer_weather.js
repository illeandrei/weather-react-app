import { FETCH_WEATHER } from '../actions/index'

export default function (state = [], action) {
    console.warn('Action received:', action.payload);

    switch (action.type) {
        case FETCH_WEATHER:
            // NEVER mutate state!
            // use concat instead of push (concat returns a new array,
            // instead of mutating old array)
            // return state.concat([action.payload.data]);

            //es6 syntax
            return [ action.payload.data, ...state ];
    }

    return state;
}