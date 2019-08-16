import { ApiModel } from "../models/api";

export class ReturnServerString {

    public api: ApiModel;

    constructor() {
        this.api = new ApiModel();
    }

    public urlPopular(type) {

        switch (type) {
            case "POPULAR/MOVIES":
                return this.api.BASE_URL + this.api.MOVIE + this.api.POPULAR + this.api.TMDB_API_KEY;
            case "POPULAR/SERIES":
                return this.api.BASE_URL + this.api.SERIES + this.api.POPULAR + this.api.TMDB_API_KEY;
            case "POPULAR/PEOPLE":
                return this.api.BASE_URL + this.api.PERSON + this.api.POPULAR + this.api.TMDB_API_KEY;
        }
    }

    public urlTrending(type, param) {
        switch (type) {
            case "TRENDING/ALL":
                return this.api.BASE_URL + this.api.TRENDING + this.api.ALL + param + this.api.TMDB_API_KEY;
            case "TRENDING/MOVIE":
                return this.api.BASE_URL + this.api.TRENDING + this.api.MOVIE + param + this.api.TMDB_API_KEY;
            case "TRENDING/PEOPLE":
                return this.api.BASE_URL + this.api.TRENDING + this.api.PERSON + param + this.api.TMDB_API_KEY;
            case "TRENDING/SERIE":
                return this.api.BASE_URL + this.api.TRENDING + this.api.SERIES + param + this.api.TMDB_API_KEY;
        }
    }

    public urlSearch(type, param) {
        switch (type) {
            case "SEARCH/MOVIE":
                return this.api.BASE_URL + this.api.SEARCH + this.api.MOVIE + this.api.TMDB_API_KEY + this.api.QUERY + param;
            case "SEARCH/SERIE":
                return this.api.BASE_URL + this.api.SEARCH + this.api.SERIES + this.api.TMDB_API_KEY + this.api.QUERY + param;
            case "SEARCH/PEOPLE":
                return this.api.BASE_URL + this.api.SEARCH + this.api.PERSON + this.api.TMDB_API_KEY + this.api.QUERY + param;
        }
    }

    public urlDetail(type, param) {
        if (param.hasOwnProperty('original_title'))
            return this.api.BASE_URL + this.api.MOVIE + '/' + param.id + this.api.TMDB_API_KEY;

        return this.api.BASE_URL + this.api.SERIES + '/' + param.id + this.api.TMDB_API_KEY;

    }

    public urlCredit(type, param) {
        if (param.hasOwnProperty('original_title'))
            return this.api.BASE_URL + this.api.MOVIE + '/' + param.id + this.api.CREDITS + this.api.TMDB_API_KEY;

        return this.api.BASE_URL + this.api.SERIES + '/' + param.id + this.api.CREDITS + this.api.TMDB_API_KEY;
    }

    public urlSingle(type, param) {
        switch (type) {
            case "CREDIT":
                return this.api.BASE_URL + this.api.CREDIT + param + this.api.TMDB_API_KEY;
            case "PERSON/PEOPLE":
                return this.api.BASE_URL + this.api.PERSON + '/' + param + this.api.TMDB_API_KEY;
        }
    }

    public photoUrl(item) {
        return item !== null ? this.api.photoUrl + item : this.api.noPhotoUrl;
    }

    public photoSpinner() {
        return 'https://thumbs.gfycat.com/ImprobablePertinentGraysquirrel.webp'
    }
}