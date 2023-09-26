// src/Controllers/userController.js
exports.create = async (req, res) => {
    try {
      // Your create logic here
      res.status(200).json({ status: 'success', data: 'User created' });
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  };
  
  exports.read = async (req, res) => {
    try {
      // Your read logic here
      res.status(200).json({ status: 'success', data: 'User data' });
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  };
  
  exports.delete = async (req, res) => {
    try {
      // Your delete logic here
      res.status(200).json({ status: 'success', data: 'User deleted' });
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  };
  
  exports.update = async (req, res) => {
    try {
      // Your update logic here
      res.status(200).json({ status: 'success', data: 'User updated' });
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  };
  