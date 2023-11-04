'use client'

import { Icon } from '.'

const IconExamples = () => (
  <div id="icon-examples">
    <div className="main-container">
      <h1 className="main-title">Icon</h1>

      <div className="examples">
        <div className="example">
          <h2 className="title">Type</h2>
          <div className="icons">
            <div className="icon-container">
              <Icon className="icon" name="account_balance_wallet" variant="outlined" />
              <h3 className="icon-title">Outlined</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_balance_wallet" variant="rounded" />
              <h3 className="icon-title">Rounded</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_balance_wallet" variant="sharp" />
              <h3 className="icon-title">Sharp</h3>
            </div>
          </div>
        </div>

        <div className="example">
          <h2 className="title">Fill</h2>
          <div className="icons">
            <div className="icon-container">
              <Icon className="icon" name="account_circle" options={{ fill: 'yes' }} />
              <h3 className="icon-title">Yes</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_circle" options={{ fill: 'no' }} />
              <h3 className="icon-title">No</h3>
            </div>
          </div>
        </div>

        <div className="example">
          <h2 className="title">Weights</h2>
          <div className="icons">
            <div className="icon-container">
              <Icon className="icon" name="account_circle" options={{ weight: 100 }} />
              <h3 className="icon-title">100</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_circle" options={{ weight: 200 }} />
              <h3 className="icon-title">200</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_circle" options={{ weight: 300 }} />
              <h3 className="icon-title">300</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_circle" options={{ weight: 400 }} />
              <h3 className="icon-title">400</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_circle" options={{ weight: 500 }} />
              <h3 className="icon-title">500</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_circle" options={{ weight: 600 }} />
              <h3 className="icon-title">600</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_circle" options={{ weight: 700 }} />
              <h3 className="icon-title">700</h3>
            </div>
          </div>
        </div>

        <div className="example">
          <h2 className="title">Grade</h2>
          <div className="icons">
            <div className="icon-container">
              <Icon className="icon" name="account_circle" options={{ grade: 'low' }} />
              <h3 className="icon-title">Low</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_circle" options={{ grade: 'medium' }} />
              <h3 className="icon-title">Medium</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_circle" options={{ grade: 'high' }} />
              <h3 className="icon-title">High</h3>
            </div>
          </div>
        </div>

        <div className="example">
          <h2 className="title">Optical Size</h2>
          <div className="icons">
            <div className="icon-container">
              <Icon className="icon" name="account_circle" options={{ opticalSize: 20 }} />
              <h3 className="icon-title">20</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_circle" options={{ opticalSize: 24 }} />
              <h3 className="icon-title">24</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_circle" options={{ opticalSize: 40 }} />
              <h3 className="icon-title">40</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_circle" options={{ opticalSize: 48 }} />
              <h3 className="icon-title">48</h3>
            </div>
          </div>
        </div>

        <div className="example">
          <h2 className="title">Color</h2>
          <div className="icons">
            <div className="icon-container">
              <Icon className="icon" fill="#53E465" name="account_circle" />
              <h3 className="icon-title">Custom</h3>
            </div>
          </div>
        </div>

        <div className="example">
          <h2 className="title">Size</h2>
          <p className="description">String</p>
          <div className="icons">
            <div className="icon-container">
              <Icon className="icon" name="account_circle" size="small" />
              <h3 className="icon-title">Small</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_circle" size="medium" />
              <h3 className="icon-title">Medium</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_circle" size="large" />
              <h3 className="icon-title">Large</h3>
            </div>
          </div>
          <p className="description">Number</p>
          <div className="icons">
            <div className="icon-container">
              <Icon className="icon" name="account_circle" size={12} />
              <h3 className="icon-title">12</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_circle" size={16} />
              <h3 className="icon-title">16</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_circle" size={20} />
              <h3 className="icon-title">20</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_circle" size={24} />
              <h3 className="icon-title">24</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_circle" size={32} />
              <h3 className="icon-title">32</h3>
            </div>
          </div>

          <div className="icons">
            <div className="icon-container">
              <Icon className="icon" name="account_circle" size={40} />
              <h3 className="icon-title">40</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_circle" size={48} />
              <h3 className="icon-title">48</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_circle" size={64} />
              <h3 className="icon-title">56</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_circle" size={96} />
              <h3 className="icon-title">96</h3>
            </div>
            <div className="icon-container">
              <Icon className="icon" name="account_circle" size={128} />
              <h3 className="icon-title">128</h3>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        #icon-examples {
          .main-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem;
            background-color: #eee;
            border-radius: 3rem;
            gap: 1rem;
          }

          .main-title {
            font-size: 2rem;
            font-weight: 700;
            margin: 0;
            margin-bottom: 1.5rem;
          }

          .examples {
            display: flex;
            align-items: flex-start;
            flex-wrap: wrap;
            gap: 1rem;
            max-width: 100%;
          }

          .example {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #fff;
            padding: 1rem 1.5rem;
            border-radius: 2rem;
            gap: 1.5rem;
            flex: 1;
            max-width: 100%;
          }

          .title {
            font-size: 1.5rem;
            font-weight: 700;
            margin: 0;
          }

          .description {
            font-size: 1rem;
            font-weight: 400;
            font-style: italic;
          }

          .icons {
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .icon-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .icon-container :global(.icon) {
            font-size: 2rem;
          }

          .icon-title {
            font-size: 0.75rem;
            font-weight: 400;
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </div>
  </div>
)

export { IconExamples }
