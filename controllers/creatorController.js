const Creator = require('../models/Creator');

exports.getAllCreators = async (req, res) => {
  try {
    const creators = await Creator.find();
    // Return an object mapped by id for compatibility with frontend's loadCreators()
    const mapped = {};
    creators.forEach(c => mapped[c.id] = c);
    res.json(mapped);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCreatorById = async (req, res) => {
  try {
    const creator = await Creator.findOne({ id: req.params.id });
    if (!creator) return res.status(404).json({ message: 'Creator not found' });
    res.json(creator);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCreatorByUsername = async (req, res) => {
  try {
    const creator = await Creator.findOne({ username: new RegExp('^' + req.params.username + '$', 'i') });
    if (!creator) return res.status(404).json({ message: 'Creator not found' });
    res.json(creator);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.upsertCreator = async (req, res) => {
  try {
    const creatorData = req.body;
    const updated = await Creator.findOneAndUpdate(
      { id: creatorData.id },
      creatorData,
      { new: true, upsert: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCreator = async (req, res) => {
  try {
    await Creator.findOneAndDelete({ id: req.params.id });
    res.json({ message: 'Deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const entry = req.body;
    const creator = await Creator.findOne({ id });
    if (!creator) return res.status(404).json({ message: 'Creator not found' });
    creator.attendance.push(entry);
    await creator.save();
    res.json(creator);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
