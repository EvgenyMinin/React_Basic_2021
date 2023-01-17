export const getStatus = (req, res) => {
  try {
    res.status(200).json({ status: 'SUCCESS' });
  } catch (error) {
    res.status(404).json({ status: 'FAILED' });
  }
};
