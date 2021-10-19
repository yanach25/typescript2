import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from "./domain/Movie";
import {MovieFormats} from "./enums/movie-formats.enum";
import {Countries} from "./enums/countries.enum";
import {Genres} from "./enums/genres.enum";

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1001,'The Avengers', 1000, MovieFormats.IMAX, 'Мстители', 2020, Countries.USA, 'Avengers Assemble', [Genres.Fantastic], 137, 'http:google.com'))


console.log(cart.items);
console.log(cart.sum());
console.log(cart.sumWithDiscount(10));
cart.remove(1008);
console.log(cart.items);
cart.remove(1);
