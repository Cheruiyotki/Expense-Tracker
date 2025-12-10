import * as userService from '../src/services/user.service';
import * as userRepository from '../src/repositories/user.repositories'; 

// 🚨 MOCKING: We mock the entire repository layer
jest.mock('../src/repositories/user.repositories');

// Cast the repository object to a mocked version for easy assertion
const MockUserRepository = userRepository as jest.Mocked<typeof userRepository>;

describe('User Service CRUD and Validation Tests', () => {
    // Jest Hook: Ensures mocks are clean before each test
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const mockExistingUser = { user_id: 1, username: 'testuser', email: 'a@b.com', password_hash: 'hash' };
    const mockUpdateData = { username: 'newname', email: 'new@b.com', password_hash: 'newhash' };

    // --- Test 1: listUsers ---
    it('should successfully return a list of users by delegating to repository', async () => {
        // ARRANGE: Mock the repository's response
        MockUserRepository.getUsers.mockResolvedValue([mockExistingUser]);
        
        // ACT
        const result = await userService.listUsers();
        
        // ASSERT
        expect(result).toEqual([mockExistingUser]);
        expect(MockUserRepository.getUsers).toHaveBeenCalledTimes(1);
    });

    // --- Test 2: getUserById (Positive Case) ---
    it('should successfully return a user when ID is valid and user exists', async () => {
        // ARRANGE
        MockUserRepository.getUserById.mockResolvedValue(mockExistingUser);
        
        // ACT
        const result = await userService.getUserById(1);
        
        // ASSERT
        expect(result).toEqual(mockExistingUser);
        expect(MockUserRepository.getUserById).toHaveBeenCalledWith(1);
    });

    // --- Test 3: getUserById (Negative Case - Validation) ---
    it.each([
        [-1, 'ID is less than or equal to zero'], 
        [NaN, 'ID is not a number'], 
        [0, 'ID is zero']
    ])('should throw "Invalid user ID" for invalid ID: %d', async (invalidId) => {
        // ACT & ASSERT
        await expect(userService.getUserById(invalidId))
            .rejects
            .toThrow('Invalid user ID');
        
        // Crucial: The repository should NEVER be called on invalid input
        expect(MockUserRepository.getUserById).not.toHaveBeenCalled();
    });

    // --- Test 4: getUserById (Negative Case - Not Found) ---
    it('should throw "User not found" if user does not exist', async () => {
        // ARRANGE: Simulate DB returning null
        MockUserRepository.getUserById.mockResolvedValue(undefined);
        
        // ACT & ASSERT
        await expect(userService.getUserById(100))
            .rejects
            .toThrow('User not found');
    });

    // --- Test 5: updateUser ---
    it('should update the user after verifying existence', async () => {
        // ARRANGE: Mock steps
        MockUserRepository.getUserById.mockResolvedValue(mockExistingUser); // User exists check
        MockUserRepository.updateUser.mockResolvedValue({ message: 'User updated' }); // Update operation
        
        // ACT
        const result = await userService.updateUser(1, mockUpdateData);
        
        // ASSERT
        expect(MockUserRepository.getUserById).toHaveBeenCalledWith(1);
        expect(MockUserRepository.updateUser).toHaveBeenCalledWith(1, mockUpdateData);
        expect(result).toEqual({ message: 'User updated' });
    });

    // --- Test 6: deleteUserById ---
    it('should delete the user after verifying existence', async () => {
        // ARRANGE: Mock steps
        MockUserRepository.getUserById.mockResolvedValue(mockExistingUser); // User exists check
        MockUserRepository.deleteUserById.mockResolvedValue({ message: 'User deleted' }); // Delete operation
        
        // ACT
        const result = await userService.deleteUserById(1);
        
        // ASSERT
        expect(MockUserRepository.getUserById).toHaveBeenCalledWith(1);
        expect(MockUserRepository.deleteUserById).toHaveBeenCalledWith(1);
        expect(result).toEqual({ message: 'User deleted' });
    });

    // --- Test 7: addUser ---
    it('should delegate new user creation directly to the repository', async () => {
        // ARRANGE
        const newUserInput = { username: 'new', email: 'n@e.w', password_hash: 'p' };
        MockUserRepository.addUser.mockResolvedValue({ user_id: 2, ...newUserInput });
        
        // ACT
        const result = await userService.addUser(newUserInput);
        
        // ASSERT
        expect(MockUserRepository.addUser).toHaveBeenCalledWith(newUserInput);
        expect(result).toHaveProperty('user_id', 2);
    });
});