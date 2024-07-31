export interface MetaDataPageAPI {
  total_pages: number;
  total_results: number;
  page: number;
}

export interface MetaDataPage {
  total: number; // 24;
  currentPage: number; // 1;
  lastPage: number; // 3;
  firstPage: number; // 1;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export type PageAPI<Data> = MetaDataPageAPI & {
  results: Data[];
};

export interface PageParams {
  page?: number;
}

export interface Page<Data> {
  meta: MetaDataPage;
  data: Data[];
}
