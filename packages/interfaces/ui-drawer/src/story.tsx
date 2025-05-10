import { Button } from '@react-beauty/ui-button';
import { Icon } from '@react-beauty/ui-icon';
import { RadioGroup, RadioInput } from '@react-beauty/ui-radio';
import { Select } from '@react-beauty/ui-select';
import { TextArea } from '@react-beauty/ui-text-area';
import { TextInput } from '@react-beauty/ui-text-input';
import { useState } from 'react';

import { Drawer } from '.';

import type { Meta, StoryObj } from '@react-beauty/storybook';
import type { ReactNode } from 'react';

const meta = {
  title: 'Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: 'var(--colors-main-goku)',
        },
      ],
    },
  },
  args: {
    isOpen: false,
    onClose: () => {},
    children: null as unknown as ReactNode,
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button size="sm" variant="fill" onClick={() => setIsOpen(true)}>
          Open Drawer
        </Button>
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Drawer.Header>
            <Drawer.Title>Drawer Title</Drawer.Title>
            <Drawer.DismissButton />
          </Drawer.Header>
          <Drawer.Body>
            <p>This is the drawer content.</p>
          </Drawer.Body>
          <Drawer.Footer>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Close
            </Button>
          </Drawer.Footer>
        </Drawer>
      </>
    );
  },
};

export const LeftDirection: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button size="sm" variant="fill" onClick={() => setIsOpen(true)}>
          Open Left Drawer
        </Button>
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          direction="left"
        >
          <Drawer.Header>
            <Drawer.Title>Left Drawer</Drawer.Title>
            <Drawer.DismissButton />
          </Drawer.Header>
          <Drawer.Body>
            <p>This drawer slides in from the left side.</p>
          </Drawer.Body>
          <Drawer.Footer>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Close
            </Button>
          </Drawer.Footer>
        </Drawer>
      </>
    );
  },
};

export const WithoutOverlay: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button variant="fill" onClick={() => setIsOpen(true)}>
          Open Drawer Without Overlay
        </Button>
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          hasOverlay={false}
        >
          <Drawer.Header>
            <Drawer.Title>No Overlay</Drawer.Title>
            <Drawer.DismissButton />
          </Drawer.Header>
          <Drawer.Body>
            <p>This drawer doesn't have a background overlay.</p>
          </Drawer.Body>
          <Drawer.Footer>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Close
            </Button>
          </Drawer.Footer>
        </Drawer>
      </>
    );
  },
};

export const WithoutShadow: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button variant="fill" onClick={() => setIsOpen(true)}>
          Open Drawer Without Shadow
        </Button>
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          hasShadow={false}
        >
          <Drawer.Header>
            <Drawer.Title>No Shadow</Drawer.Title>
            <Drawer.DismissButton />
          </Drawer.Header>
          <Drawer.Body>
            <p>This drawer doesn't have a shadow effect.</p>
          </Drawer.Body>
          <Drawer.Footer>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Close
            </Button>
          </Drawer.Footer>
        </Drawer>
      </>
    );
  },
};

export const CustomWidth: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button variant="fill" onClick={() => setIsOpen(true)}>
          Open Large Drawer
        </Button>
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} width="lg">
          <Drawer.Header>
            <Drawer.Title>Large Drawer</Drawer.Title>
            <Drawer.DismissButton />
          </Drawer.Header>
          <Drawer.Body>
            <p>This drawer uses a larger width (lg size).</p>
          </Drawer.Body>
          <Drawer.Footer>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Close
            </Button>
          </Drawer.Footer>
        </Drawer>
      </>
    );
  },
};

export const ComplexContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Doe');
    const [email, setEmail] = useState('john.doe@example.com');
    const [phone, setPhone] = useState('+1 (555) 123-4567');
    const [address, setAddress] = useState('123 Main St');
    const [city, setCity] = useState('Boston');
    const [zipCode, setZipCode] = useState('02108');
    const [selectedState, setSelectedState] = useState('MA');
    const [preferredContact, setPreferredContact] = useState('email');

    return (
      <>
        <Button variant="fill" onClick={() => setIsOpen(true)}>
          Open Complex Drawer
        </Button>
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} width="lg">
          <Drawer.Header>
            <Drawer.Title>User Profile</Drawer.Title>
            <Drawer.DismissButton />
          </Drawer.Header>
          <Drawer.Body>
            <div style={{ padding: '16px' }}>
              <div style={{ marginBottom: '24px' }}>
                <h3>Personal Information</h3>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                  }}
                >
                  <div>
                    <TextInput>
                      <TextInput.Label htmlFor="first-name">
                        First Name
                      </TextInput.Label>
                      <TextInput.Field
                        id="first-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </TextInput>
                  </div>
                  <div>
                    <TextInput>
                      <TextInput.Label htmlFor="last-name">
                        Last Name
                      </TextInput.Label>
                      <TextInput.Field
                        id="last-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </TextInput>
                  </div>
                  <div>
                    <TextInput>
                      <TextInput.Label htmlFor="email">Email</TextInput.Label>
                      <TextInput.Field
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <TextInput.TrailElement>
                        <Icon name="mailEmailStats" size="md" />
                      </TextInput.TrailElement>
                    </TextInput>
                  </div>
                  <div>
                    <TextInput>
                      <TextInput.Label htmlFor="phone">Phone</TextInput.Label>
                      <TextInput.Field
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <TextInput.TrailElement>
                        <Icon name="devicesPhone" size="md" />
                      </TextInput.TrailElement>
                    </TextInput>
                  </div>
                </div>

                <div style={{ marginTop: '16px' }}>
                  <h4>Preferred Contact Method</h4>
                  <RadioGroup
                    name="contact-preference"
                    selectedValue={preferredContact}
                    onValueChange={setPreferredContact}
                  >
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <RadioInput value="email">
                        <RadioInput.Field id="contact-email" />
                        <RadioInput.Label htmlFor="contact-email">
                          Email
                        </RadioInput.Label>
                      </RadioInput>
                      <RadioInput value="phone">
                        <RadioInput.Field id="contact-phone" />
                        <RadioInput.Label htmlFor="contact-phone">
                          Phone
                        </RadioInput.Label>
                      </RadioInput>
                      <RadioInput value="text">
                        <RadioInput.Field id="contact-text" />
                        <RadioInput.Label htmlFor="contact-text">
                          Text Message
                        </RadioInput.Label>
                      </RadioInput>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div>
                <h3>Address</h3>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '16px',
                  }}
                >
                  <div>
                    <TextInput>
                      <TextInput.Label htmlFor="address">
                        Street Address
                      </TextInput.Label>
                      <TextInput.Field
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <TextInput.LeadElement>
                        <Icon name="mapsPinLocation" size="md" />
                      </TextInput.LeadElement>
                    </TextInput>
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr 1fr',
                      gap: '16px',
                    }}
                  >
                    <div>
                      <TextInput>
                        <TextInput.Label htmlFor="city">City</TextInput.Label>
                        <TextInput.Field
                          id="city"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </TextInput>
                    </div>
                    <div>
                      <Select
                        value={selectedState}
                        onValueChange={setSelectedState}
                      >
                        <Select.Label htmlFor="state">State</Select.Label>
                        <Select.Field id="state">
                          <Select.Option value="AL">Alabama</Select.Option>
                          <Select.Option value="AK">Alaska</Select.Option>
                          <Select.Option value="AZ">Arizona</Select.Option>
                          <Select.Option value="AR">Arkansas</Select.Option>
                          <Select.Option value="CA">California</Select.Option>
                          <Select.Option value="CO">Colorado</Select.Option>
                          <Select.Option value="CT">Connecticut</Select.Option>
                          <Select.Option value="DE">Delaware</Select.Option>
                          <Select.Option value="FL">Florida</Select.Option>
                          <Select.Option value="GA">Georgia</Select.Option>
                          <Select.Option value="HI">Hawaii</Select.Option>
                          <Select.Option value="ID">Idaho</Select.Option>
                          <Select.Option value="IL">Illinois</Select.Option>
                          <Select.Option value="IN">Indiana</Select.Option>
                          <Select.Option value="IA">Iowa</Select.Option>
                          <Select.Option value="KS">Kansas</Select.Option>
                          <Select.Option value="KY">Kentucky</Select.Option>
                          <Select.Option value="LA">Louisiana</Select.Option>
                          <Select.Option value="ME">Maine</Select.Option>
                          <Select.Option value="MD">Maryland</Select.Option>
                          <Select.Option value="MA">
                            Massachusetts
                          </Select.Option>
                          <Select.Option value="MI">Michigan</Select.Option>
                          <Select.Option value="MN">Minnesota</Select.Option>
                          <Select.Option value="MS">Mississippi</Select.Option>
                          <Select.Option value="MO">Missouri</Select.Option>
                        </Select.Field>
                        <Select.TrailElement />
                      </Select>
                    </div>
                    <div>
                      <TextInput>
                        <TextInput.Label htmlFor="zip">
                          Zip Code
                        </TextInput.Label>
                        <TextInput.Field
                          id="zip"
                          value={zipCode}
                          onChange={(e) => setZipCode(e.target.value)}
                        />
                      </TextInput>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '24px' }}>
                <h3>Additional Notes</h3>
                <TextArea>
                  <TextArea.Label htmlFor="notes">Notes</TextArea.Label>
                  <TextArea.Field
                    id="notes"
                    placeholder="Enter any additional information..."
                    rows={4}
                  />
                  <TextArea.HelperText>
                    This information will only be visible to administrators
                  </TextArea.HelperText>
                </TextArea>
              </div>
            </div>
          </Drawer.Body>
          <Drawer.Footer>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button size="sm" variant="fill" onClick={() => setIsOpen(false)}>
              Save Changes
            </Button>
          </Drawer.Footer>
        </Drawer>
      </>
    );
  },
};
