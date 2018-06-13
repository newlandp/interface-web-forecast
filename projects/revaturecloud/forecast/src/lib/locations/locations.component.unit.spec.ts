import { LocationsComponent } from "./locations.component";

describe('forecast component', () => {
  let component: LocationsComponent;

  beforeEach(() => {
    component = new LocationsComponent();
  })

  it('exists', () => {
    expect(component).toBeTruthy();
  });
});
