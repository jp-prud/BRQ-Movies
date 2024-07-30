import { MetaDataPage, MetaDataPageAPI, Page, PageAPI } from "@types";

export function APIMapper() {
  function toDomain() { }

  function toMetaDataPage(meta: MetaDataPageAPI): MetaDataPage {
    return {
      currentPage: meta.page,
      total: meta.total_results,
      firstPage: 1,
      hasNextPage: meta.page < meta.total_pages,
      hasPreviousPage: meta.page > 1,
      lastPage: meta.total_pages,
    };
  }

  function toPageModel<ApiType, ModelType>(
    page: PageAPI<ApiType>,
    adapterToModel: (api: ApiType) => ModelType,
  ): Page<ModelType> {
    return {
      meta: toMetaDataPage(page),
      data: page.results.map(adapterToModel),
    };
  }

  return {
    toMetaDataPage,
    toPageModel,
  }
}