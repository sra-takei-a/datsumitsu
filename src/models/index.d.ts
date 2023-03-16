import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type EagerFilterVenues = {
  readonly venues?: (Venues | null)[] | null;
}

type LazyFilterVenues = {
  readonly venues?: (Venues | null)[] | null;
}

export declare type FilterVenues = LazyLoading extends LazyLoadingDisabled ? EagerFilterVenues : LazyFilterVenues

export declare const FilterVenues: (new (init: ModelInit<FilterVenues>) => FilterVenues)

type EagerVenues = {
  readonly venue_name?: string | null;
}

type LazyVenues = {
  readonly venue_name?: string | null;
}

export declare type Venues = LazyLoading extends LazyLoadingDisabled ? EagerVenues : LazyVenues

export declare const Venues: (new (init: ModelInit<Venues>) => Venues)











type EagerGenre = {
  readonly id: string;
  readonly name?: string | null;
}

type LazyGenre = {
  readonly id: string;
  readonly name?: string | null;
}

export declare type Genre = LazyLoading extends LazyLoadingDisabled ? EagerGenre : LazyGenre

export declare const Genre: (new (init: ModelInit<Genre>) => Genre) & {
  copyOf(source: Genre, mutator: (draft: MutableModel<Genre>) => MutableModel<Genre> | void): Genre;
}

type EagerGenreMaster = {
  readonly id: string;
  readonly name?: string | null;
}

type LazyGenreMaster = {
  readonly id: string;
  readonly name?: string | null;
}

export declare type GenreMaster = LazyLoading extends LazyLoadingDisabled ? EagerGenreMaster : LazyGenreMaster

export declare const GenreMaster: (new (init: ModelInit<GenreMaster>) => GenreMaster) & {
  copyOf(source: GenreMaster, mutator: (draft: MutableModel<GenreMaster>) => MutableModel<GenreMaster> | void): GenreMaster;
}

type EagerUser = {
  readonly id: string;
  readonly liff_user_id?: string | null;
  readonly user_name?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly liff_user_id?: string | null;
  readonly user_name?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerFacility = {
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly row?: number | null;
  readonly longitude?: number | null;
  readonly latitude?: number | null;
  readonly rating?: number | null;
  readonly besttime_venue_id?: string | null;
}

type LazyFacility = {
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly row?: number | null;
  readonly longitude?: number | null;
  readonly latitude?: number | null;
  readonly rating?: number | null;
  readonly besttime_venue_id?: string | null;
}

export declare type Facility = LazyLoading extends LazyLoadingDisabled ? EagerFacility : LazyFacility

export declare const Facility: (new (init: ModelInit<Facility>) => Facility) & {
  copyOf(source: Facility, mutator: (draft: MutableModel<Facility>) => MutableModel<Facility> | void): Facility;
}

type EagerHome = {
  readonly id: string;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly price?: number | null;
}

type LazyHome = {
  readonly id: string;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly price?: number | null;
}

export declare type Home = LazyLoading extends LazyLoadingDisabled ? EagerHome : LazyHome

export declare const Home: (new (init: ModelInit<Home>) => Home) & {
  copyOf(source: Home, mutator: (draft: MutableModel<Home>) => MutableModel<Home> | void): Home;
}