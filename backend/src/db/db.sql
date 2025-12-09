-- Connect to the expense_tracker_db before running this script.

-- 1. Users Table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(256) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Categories Table
CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    name VARCHAR(50) NOT NULL,
    -- Constraint: Category name must be unique per user
    UNIQUE (user_id, name),
    -- Foreign Key
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- 3. Expenses Table
CREATE TABLE expenses (
    expense_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    amount NUMERIC(10, 2) NOT NULL, -- NUMERIC is the equivalent of DECIMAL
    expense_date DATE NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    -- Foreign Keys
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE RESTRICT
);

-- 1. Insert Sample User (DemoUser) and capture ID
INSERT INTO users (username, email, password_hash)
VALUES ('DemoUserPG', 'demo_pg@tracker.com', 'MOCKED_HASH_DEMO')
RETURNING user_id; -- Get the ID immediately after insertion

-- NOTE: You will need to manually execute the RETURNING statement 
-- to get the IDs for subsequent INSERT statements if running outside of a code block.

-- Assume DemoUserPG ID = 1 and ClientUserPG ID = 2 for this manual DML:
-- Replace '1' and '2' with the actual IDs returned by your execution tool if different.
DO $$ 
DECLARE
    demo_user_id INT := 1;
    client_user_id INT := 2;
    groceries_id INT;
    rent_id INT;
    coffee_id INT;
BEGIN

    -- Insert Categories for DemoUser
    INSERT INTO categories (user_id, name) VALUES (demo_user_id, 'Groceries') RETURNING category_id INTO groceries_id;
    INSERT INTO categories (user_id, name) VALUES (demo_user_id, 'Rent') RETURNING category_id INTO rent_id;
    
    -- Insert Expenses for DemoUser
    INSERT INTO expenses (user_id, category_id, amount, expense_date, description)
    VALUES 
        (demo_user_id, rent_id, 1200.00, '2025-12-01', 'Monthly rent'),
        (demo_user_id, groceries_id, 85.50, '2025-12-05', 'Weekly shopping');

    -- Insert ClientUser (if not already done)
    INSERT INTO users (username, email, password_hash)
    VALUES ('ClientUserPG', 'client_pg@tracker.com', 'MOCKED_HASH_CLIENT')
    ON CONFLICT (username) DO NOTHING;
    
    -- Re-fetch ClientUserID if needed (not strictly necessary if you rely on the DML structure)
    -- client_user_id := (SELECT user_id FROM users WHERE username = 'ClientUserPG');

    -- Insert Categories for ClientUser
    INSERT INTO categories (user_id, name) VALUES (client_user_id, 'Coffee') RETURNING category_id INTO coffee_id;
    
    -- Insert Expenses for ClientUser
    INSERT INTO expenses (user_id, category_id, amount, expense_date, description)
    VALUES 
        (client_user_id, coffee_id, 4.50, '2025-12-07', 'Morning coffee');
        
END $$;