import axios from "axios";
import Server from '../api_client/apiClient'

export function fetchPeopleAlbums(person_id) {
  return function(dispatch) {
    dispatch({type: "FETCH_PEOPLE_ALBUMS"});
    Server.get(`albums/person/${person_id}/`)
      .then((response) => {
        dispatch({type: "FETCH_PEOPLE_ALBUMS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_PEOPLE_ALBUMS_REJECTED", payload: err})
      })
  }
}


export function fetchAutoAlbums() {
  return function(dispatch) {
    dispatch({type: "FETCH_AUTO_ALBUMS"});
    Server.get("albums/auto/")
      .then((response) => {
        dispatch({type: "FETCH_AUTO_ALBUMS_FULFILLED", payload: response.data.results})
      })
      .catch((err) => {
        dispatch({type: "FETCH_AUTO_ALBUMS_REJECTED", payload: err})
      })
  }
}