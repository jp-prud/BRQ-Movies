import { renderHook } from "@tests";
import { useSignOut } from "../useSignOut/useSignOut";

const mockedRemoveCredentials = jest.fn();

jest.mock('@context', () => {
  const originalModule = jest.requireActual('@context');

  return {
    ...originalModule,
    useAuthContext: () => ({
      removeCredentials: mockedRemoveCredentials,
    }),
  };
});


describe('useSignOut', () => { 
  it('should remove credentials if the sign-out successfully', async () => {
    const { result } = renderHook(() => useSignOut());

    result.current.signOut();

    expect(mockedRemoveCredentials).toHaveBeenCalledTimes(1); 
   });
});