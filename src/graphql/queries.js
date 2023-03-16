/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFilterVenues = /* GraphQL */ `
  query GetFilterVenues($query: QueryGetFilterVenuesQueryInput) {
    getFilterVenues(query: $query) {
      venues {
        venue_name
      }
    }
  }
`;
export const getGenre = /* GraphQL */ `
  query GetGenre($id: ID!) {
    getGenre(id: $id) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listGenres = /* GraphQL */ `
  query ListGenres(
    $filter: ModelGenreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGenres(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGenres = /* GraphQL */ `
  query SyncGenres(
    $filter: ModelGenreFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGenres(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getGenreMaster = /* GraphQL */ `
  query GetGenreMaster($id: ID!) {
    getGenreMaster(id: $id) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listGenreMasters = /* GraphQL */ `
  query ListGenreMasters(
    $filter: ModelGenreMasterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGenreMasters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGenreMasters = /* GraphQL */ `
  query SyncGenreMasters(
    $filter: ModelGenreMasterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGenreMasters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      liff_user_id
      user_name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        liff_user_id
        user_name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        liff_user_id
        user_name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFacility = /* GraphQL */ `
  query GetFacility($id: ID!) {
    getFacility(id: $id) {
      id
      name
      address
      row
      longitude
      latitude
      rating
      besttime_venue_id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listFacilitys = /* GraphQL */ `
  query ListFacilitys(
    $filter: ModelFacilityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFacilitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        row
        longitude
        latitude
        rating
        besttime_venue_id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFacilities = /* GraphQL */ `
  query SyncFacilities(
    $filter: ModelFacilityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFacilities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        address
        row
        longitude
        latitude
        rating
        besttime_venue_id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getHome = /* GraphQL */ `
  query GetHome($id: ID!) {
    getHome(id: $id) {
      id
      address
      image_url
      price
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listHomes = /* GraphQL */ `
  query ListHomes(
    $filter: ModelHomeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHomes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        address
        image_url
        price
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncHomes = /* GraphQL */ `
  query SyncHomes(
    $filter: ModelHomeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHomes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        address
        image_url
        price
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
