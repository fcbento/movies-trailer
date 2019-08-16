export class ApiModel {
    
    public BASE_URL: string = 'https://api.themoviedb.org/3/'

    public MOVIE : string = 'movie';
    public URL_SEARCH : string = 'search';
    public SERIES : string = 'tv';
    public GENRES: string = 'genre';
    public CREDIT: string = 'credit/';
    public LIST: string = 'list';
    public QUERY: string = '&query=';
    public SEARCH: string = 'search/';
    public POPULAR:string = '/popular';
    public CREDITS: string = '/credits';
    public PERSON: string = 'person';
    public TRENDING: string = 'trending/'
    public ALL: string = 'all'

    public photoUrl: string = "https://image.tmdb.org/t/p/w500/";
    public noPhotoUrl: string = 'https://www.silvercompany.co.uk/images/no_image_available.png';

    public BASE_URL_YOUTUBE: string = 'https://www.googleapis.com/youtube/v3/search?&key=';
    public YOUTUBE_API_KEY: string=  'AIzaSyDd_sfvQ4NASb-k0oKYAr_g9FZcQILtyKc&'
    public TMDB_API_KEY: string = '?api_key=5086a7ed972bd4bb57a2d71cdd63eff5';
}