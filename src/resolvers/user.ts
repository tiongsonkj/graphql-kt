export default {
    // Resolve the list of notes for a user when requested
    notes: async (user: { _id: string; }, args: any, { models }: any) => {
      return await models.Note.find({ author: user._id }).sort({ _id: -1 });
    },
    // Resolve the list of favorites for a user when requested
    favorites: async (user: { _id: string; }, args: any, { models }: any) => {
      return await models.Note.find({ favoritedBy: user._id }).sort({ _id: -1 });
    }
};