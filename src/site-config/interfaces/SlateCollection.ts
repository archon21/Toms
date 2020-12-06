export interface SlateCollectionPage {
  // pageId: String;
  order: Number;
  content: String;
  title: String;
}

export interface SlateCollection {
  // collectionId: ID;
  name: String;
  lastUpdated: String;
  pages: Array<SlateCollectionPage>;
}
