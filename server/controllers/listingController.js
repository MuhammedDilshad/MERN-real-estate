import Listing from "../modals/listingModel.js";

export const createListing = async (req, res, next) => {
  try {
    console.log(req.body, "listing");

    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};
