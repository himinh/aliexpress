export type PaginateResponse<T> = {
	docs: T[];
	pageInfo: {
		_hasNextPage: boolean;
		_hasPrevPage: boolean;
		_limit: number;
		_nextPage: number;
		_page: number;
		_pagingCounter: number;
		_prevPage: number;
		_totalData: number;
		_totalPages: number;
	};
};
