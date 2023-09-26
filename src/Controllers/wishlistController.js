// src/Controllers/wishlistController.js

exports.create = async (req, res) => {
    try {
      // Your logic for creating a sub-admin here
      res.status(200).json({ status: 'success', data: 'Sub-admin created' });
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  };
  
  exports.read = async (req, res) => {
    try {
      // Your logic for reading sub-admin data here
      res.status(200).json({ status: 'success', data: 'Sub-admin data' });
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  };
  
  exports.delete = async (req, res) => {
    try {
      // Your logic for deleting a sub-admin here
      res.status(200).json({ status: 'success', data: 'Sub-admin deleted' });
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  };
  
  exports.update = async (req, res) => {
    try {
      // Your logic for updating sub-admin information here
      res.status(200).json({ status: 'success', data: 'Sub-admin updated' });
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  };
  