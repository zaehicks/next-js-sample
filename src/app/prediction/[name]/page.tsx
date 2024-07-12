interface Params {
  params: { name: string };
}

const getPredicatedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  const data = await res.json();

  return data;
};

const getPredicatedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  const data = res.json();

  return data;
};

const getPredicatedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  const data = res.json();

  return data;
};

const page = async ({ params }: Params) => {
  const [age, gender, country] = await Promise.all([
    getPredicatedAge(params.name),
    getPredicatedGender(params.name),
    getPredicatedCountry(params.name),
  ]);

  return (
    <div>
      <div>
        <div>Personal Info</div>
        <div className="text-white">Age: {age?.age}</div>
        <div className="text-white">Gender: {gender?.gender}</div>
        <div className="text-white">
          Country: {country?.country[0]?.country_id}
        </div>
      </div>
    </div>
  );
};

export default page;
