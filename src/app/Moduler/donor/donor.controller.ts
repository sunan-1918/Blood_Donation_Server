import httpStatus from "http-status";
import sendRespone from "../../utility/sendResponse";
import catchAsync from "../../utility/trycatch";
import { donorService } from "./donor.service";
import pick from "../../utility/pick";
import { donorFilterFields, donorPaginationFields } from "./donor.const";

const getDonor = catchAsync(async (req, res) => {

    const filter = pick(req.query, donorFilterFields);
    const options = pick(req.query, donorPaginationFields);

    const result = await donorService.getDonor(filter, options);

    sendRespone(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Donors successfully found",
        meta: result.meta,
        data: result.data
    })
})

const deleteDonor = catchAsync(async (req, res) => {
    const { id } = req.params
    const result = await donorService.deleteDonor(id)
    sendRespone(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Donor is deleted successfully",
        data: result
    })
})

export const donorController = {
    getDonor,
    deleteDonor
}