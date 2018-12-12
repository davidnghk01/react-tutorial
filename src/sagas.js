import { eventChannel, END } from 'redux-saga';
import { take, call, put, takeLatest } from 'redux-saga/effects'
import {fetchStarWarFilms} from './starwar'

function timer(interval_in_sec) {
    return eventChannel(emitter => {
        const iv = setInterval(() => {
           emitter(true)
        }, interval_in_sec * 1000);
        return () => clearInterval(iv)
    })
}

function* mySaga() {
    yield takeLatest("FETCH_FILMS", fetchFilmsInBackground);
}

function* fetchFilmsInBackground(action) {
    const chan = yield call(timer, 10);
    try {
        yield fetchFilms(action);
        while (true) {
            console.log('Fetch films');
            yield take(chan);
            yield fetchFilms(action);
        }
    } finally {
        chan.close()
    }
}

function* fetchFilms(action) {
    try {
        const films = yield call(fetchStarWarFilms);
        yield put({type: "FETCH_FILMS_DONE", films});
    } catch (e) {
        yield put({type: "FETCH_FILMS_FAILED", error: e});
    }
}

export default mySaga;