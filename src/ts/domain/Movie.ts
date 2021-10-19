import Buyable from './Buyable';
import {Genres} from "../enums/genres.enum";
import {MovieFormats} from "../enums/movie-formats.enum";
import {Countries} from "../enums/countries.enum";

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly format: MovieFormats,
        readonly localName: string,
        readonly year: number,
        readonly country: Countries,
        readonly tagline: string,
        readonly genre: Genres[],
        readonly timing: number,
        readonly poster: string,
    ) { }
}
