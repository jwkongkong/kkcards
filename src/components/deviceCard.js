import {Coffee} from "@phosphor-icons/react";
import {Format} from "@jwkongkong/kktools";

export default function DeviceCard( {amount} ) {

    const formatAmount = (input) => {
        return Format.formatMoney(input)
    }

    return (

        <div className="text-center py-10">
            <div className="w-full flex justify-center items-center  space-x-4">
                <Coffee size={30} className="text-gray-600 font-light"/> <div className="text-2xl text-gray-600 font-light ">暂无数据</div>
            </div>
            <div>
                { formatAmount(amount) }
            </div>

            <div className="text-gray-600 mt-3 font-light">No Content To Show</div>
        </div>
    )
}