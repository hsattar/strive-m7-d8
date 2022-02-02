export interface ISearchResults {
    id:                      number;
    readable:                boolean;
    title:                   string;
    title_short:             string;
    title_version:           string;
    link:                    string;
    duration:                number;
    rank:                    number;
    explicit_lyrics:         boolean;
    explicit_content_lyrics: number;
    explicit_content_cover:  number;
    preview:                 string;
    md5_image:               string;
    artist:                  Artist;
    album:                   Album;
    type:                    string;
}

export interface Album {
    id:           number;
    title:        string;
    cover:        string;
    cover_small:  string;
    cover_medium: string;
    cover_big:    string;
    cover_xl:     string;
    md5_image:    string;
    tracklist:    string;
    type:         string;
}

export interface Artist {
    id:             number;
    name:           string;
    link:           string;
    picture:        string;
    picture_small:  string;
    picture_medium: string;
    picture_big:    string;
    picture_xl:     string;
    tracklist:      string;
    type:           string;
}

export interface ITrackDetails {
    id:                      number;
    readable:                boolean;
    title:                   string;
    title_short:             string;
    title_version:           string;
    isrc:                    string;
    link:                    string;
    share:                   string;
    duration:                number;
    track_position:          number;
    disk_number:             number;
    rank:                    number;
    release_date:            Date;
    explicit_lyrics:         boolean;
    explicit_content_lyrics: number;
    explicit_content_cover:  number;
    preview:                 string;
    bpm:                     number;
    gain:                    number;
    available_countries:     string[];
    contributors:            Artist2[];
    md5_image:               string;
    artist:                  Artist;
    album:                   Album2;
    type:                    string;
}

export interface Album2 {
    id:           number;
    title:        string;
    link:         string;
    cover:        string;
    cover_small:  string;
    cover_medium: string;
    cover_big:    string;
    cover_xl:     string;
    md5_image:    string;
    release_date: Date;
    tracklist:    string;
    type:         string;
}

export interface Artist2 {
    id:             number;
    name:           string;
    link:           string;
    share:          string;
    picture:        string;
    picture_small:  string;
    picture_medium: string;
    picture_big:    string;
    picture_xl:     string;
    radio:          boolean;
    tracklist:      string;
    type:           string;
    role?:          string;
}