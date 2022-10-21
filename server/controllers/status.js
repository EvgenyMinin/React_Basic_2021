export const getStatus = (req, res) => {
  try {
    res.status(200).json('SUCCESS');
  } catch (error) {
    res.status(404).json('FAILED');
  }
};
