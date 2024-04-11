app.post('/api/saveProfile', async (req, res) => {
    try {
        const { firstName, lastName, username, email, password, dob } = req.body;
        
        // Create a new user profile object based on the schema
        const newUser = new user({
            firstName,
            lastName,
            username,
            email,
            password,
            dob
        });
        
        // Save the user profile into the database
        const savedUser = await newUser.save();
        
        res.status(201).json(savedUser); // Send back the saved user profile
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});