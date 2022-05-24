import { render } from '@testing-library/react';

import FrontWebsiteFeaturePivotsList from './front-website-feature-pivots-list';

describe('FrontWebsiteFeaturePivotsList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <FrontWebsiteFeaturePivotsList
        pivots={[
          {
            id: 1,
            pivot: '25',
          },
        ]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
