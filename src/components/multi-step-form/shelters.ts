type Shelter = {
  id: number;
  name: string;
};

const mockedShelters: Shelter[] = [
  { id: 1, name: "Útulok pre psov - TEZAS" },
  { id: 2, name: "Útulok pre psov - TEZA" },
  { id: 3, name: "Útulok pre psov - TEZ" }
];

export const shelterOptions = mockedShelters.map(({ id, name }) => ({
  value: String(id),
  label: name
}));

export const getShelterName = (id?: string) =>
  shelterOptions.find((option) => option.value === id)?.label;
