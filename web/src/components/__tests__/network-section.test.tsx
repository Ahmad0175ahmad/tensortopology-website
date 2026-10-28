import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NetworkSection } from '../network/NetworkSection';
import { networkGroups } from '@/content/skills';
import { rackUnits } from '@/content/rack';

describe('NetworkSection', () => {
  it('has the section heading', () => {
    render(<NetworkSection />);
    expect(
      screen.getByRole('heading', { level: 2, name: /networking engineering/i })
    ).toBeInTheDocument();
  });

  it('renders one button per rack unit', () => {
    render(<NetworkSection />);
    for (const u of rackUnits) {
      expect(screen.getByRole('button', { name: u.label })).toBeInTheDocument();
    }
  });

  it('shows the default rack unit services', () => {
    render(<NetworkSection />);
    expect(screen.getByRole('region', { name: /rack details/i })).toHaveTextContent(
      /MikroTik Router Configuration/
    );
  });

  it('switches the panel when another unit is selected', async () => {
    const user = userEvent.setup();
    render(<NetworkSection />);
    await user.click(screen.getByRole('button', { name: 'UPS' }));
    const panel = screen.getByRole('region', { name: /rack details/i });
    expect(panel).toHaveTextContent(/UPS Installation/);
    expect(panel).not.toHaveTextContent(/MikroTik Router Configuration/);
  });

  it('shows the Quick Shop numbers', () => {
    render(<NetworkSection />);
    expect(
      screen.getByRole('heading', { level: 3, name: /quick shop by the numbers/i })
    ).toBeInTheDocument();
    const cameras = screen.getByText('IP cameras').closest('li') as HTMLElement;
    expect(within(cameras).getByText('16')).toBeInTheDocument();
    const pcs = screen.getByText('PCs').closest('li') as HTMLElement;
    expect(within(pcs).getByText('4')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /see the quick shop project/i })
    ).toHaveAttribute('href', '#projects');
  });

  it('lists every group in a closed accordion', () => {
    const { container } = render(<NetworkSection />);
    const details = container.querySelectorAll('details');
    expect(details).toHaveLength(networkGroups.length);
    details.forEach((d) => expect(d.open).toBe(false));
  });

  it('shows the three support plans and the AMC line', () => {
    render(<NetworkSection />);
    expect(screen.getByText('Basic Support')).toBeInTheDocument();
    expect(screen.getByText('Business Support')).toBeInTheDocument();
    expect(screen.getByText('Enterprise Support')).toBeInTheDocument();
    expect(screen.getByText(/annual maintenance contracts \(amc\)/i)).toBeInTheDocument();
  });

  it('links to the networking projects', () => {
    render(<NetworkSection />);
    expect(
      screen.getByRole('link', { name: /see the networking projects/i })
    ).toHaveAttribute('href', '#projects');
  });
});
