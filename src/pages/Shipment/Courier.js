import { useEffect, useState } from "react";
import sumPrice from "../../utils/sum-price";
import courier from "../../api/rajaongkir";
import { toast } from "react-toastify";

function Courier({ DataState }) {
  //
  const { DataShipment, setDataShipment, carts } = DataState;

  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);

  const [cityId, setCityId] = useState(null);
  const [service, setService] = useState(null);

  const [couriers, setCouriers] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    courier
      .getProvince()
      .then((res) => {
        setProvinces(res?.rajaongkir?.results);
      })
      .catch((err) => {
        toast.error(`${err.message}`, {
          position: "bottom-right",
          autoClose: 2000,
        });
        // console.log(err);
      });
  }, []);

  const GetCities = (id) => {
    courier
      .getCity(id)
      .then((res) => {
        setCities(res?.rajaongkir?.results);
      })
      .catch((err) => {
        toast.error(`${err.message}`, {
          position: "bottom-right",
          autoClose: 2000,
        });
        // console.log(err);
      });
  };

  const courierCost = (courierName) => {
    const payload = {
      origin: 114, //city id for denpasar
      destination: cityId,
      weight: 1400, //dummy weight
      courier: courierName,
    };

    courier
      .cost(payload)
      .then((res) => {
        // console.log(res?.rajaongkir?.results[0]);
        setCouriers(res?.rajaongkir?.results[0]?.costs);
      })
      .catch((err) =>
        toast.error(`${err.message}`, {
          position: "bottom-right",
          autoClose: 2000,
        })
      );
  };

  return (
    <>
      <div className="text-lg pt-4 font-semibold">Select Courier</div>
      <hr />
      <div className="flex flex-row">
        <div className="py-3">
          <label className="font-semibold text-gray-800" htmlFor="province">
            Province
          </label>
          <select
            className="w-full py-3 px-4 rounded-md p-3 border-[1px]"
            id="province"
            onChange={(e) => GetCities(e?.target?.value)}
          >
            <option value="1">Select Province</option>
            {provinces?.map((province, index) => {
              return (
                <option key={index} value={province.province_id}>
                  {province.province}
                </option>
              );
            })}
          </select>
        </div>
        <div className="px-3"></div>
        <div className="py-3">
          {cities.length > 0 && (
            <>
              <label className="font-semibold text-gray-800" htmlFor="city">
                City
              </label>
              <select
                className="w-full py-3 px-4 rounded-md p-3 border-[1px]"
                id="city"
                onChange={(e) => setCityId(e?.target?.value)}
              >
                {cities.map((city, index) => {
                  return (
                    <option key={index} value={city.city_id}>
                      {city.city_name}
                    </option>
                  );
                })}
              </select>
            </>
          )}
        </div>
        <div className="px-3"></div>
      </div>
      {/* courier service */}
      <div className="font-semibold">Select Services</div>
      {cityId && (
        <div className="flex flex-row mb-3">
          {["jne", "tiki", "pos"].map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setSelectedService(null);
                  setService(item);
                  courierCost(item);
                }}
                className={`mr-3 cursor-pointer py-4 px-4 ${
                  service === item ? "bg-blue-500" : "bg-gray-400"
                }  text-white shadow-lg rounded-lg text-sm uppercase`}
              >
                <div className="font-semibold text-xs">{item}</div>
              </div>
            );
          })}
        </div>
      )}

      {/* courier list */}
      <div className="font-semibold">Courier List</div>
      {couriers.length > 0 && (
        <div className="flex flex-row">
          {couriers.map((courier, index) => {
            const { cost } = courier;
            return (
              <div
                key={index}
                onClick={() => {
                  setSelectedService(courier);
                  setDataShipment({
                    ...DataShipment,
                    courier_service: `${service} - (${courier?.service}) - ${courier?.description}`,
                    estimation: cost[0]?.etd,
                    total_shipping: cost[0]?.value,
                    total_price: sumPrice(carts) + cost[0]?.value,
                  });
                }}
                className={`mr-2 cursor-pointer py-4 px-4 ${
                  selectedService?.service === courier?.service
                    ? `text-white bg-blue-500`
                    : "bg-blue-100 text-gray-500"
                }  shadow-lg rounded-lg text-sm`}
              >
                <div className="font-semibold text-xs">
                  {`(${courier?.service})- ${courier?.description}`}
                </div>
                <div className="font-semibold">
                  Estimasi {`${cost[0].etd} Hari`}
                </div>
                <div className="font-semibold">Rp. {cost[0].value}</div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Courier;
