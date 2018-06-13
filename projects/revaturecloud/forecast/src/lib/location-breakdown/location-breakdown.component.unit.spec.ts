import { LocationBreakdownComponent } from "./location-breakdown.component";

describe('forecast component', () => {
  let component: LocationBreakdownComponent;

  beforeEach(() => {
    component = new LocationBreakdownComponent();
  })

  it('exists', () => {
    expect(component).toBeTruthy();
  });
});
