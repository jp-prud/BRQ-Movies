import { renderHook, waitFor } from '@tests';

import { useGetSimilars } from '../useGetSimilars/useGetSimilars';

describe('useGetSimilars', () => {
  it('should get similar movies by id', async () => { 
    const { result } = renderHook(() => useGetSimilars(533535));

    await waitFor(() =>
      expect(result.current.isLoading).toBe(false),
    );

    expect(result.current.similars).toMatchSnapshot();
    expect(result.current.isError).toBe(false);
  });
});
