<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1MITXb07mW73pTP_yVs6DpRMOYKwQvNka

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. Run the app:
   ```bash
   npm run dev
   ```

## Deploy to Netlify

This project is configured for easy deployment to Netlify. 

### Steps to Deploy:

1. **Create a GitHub repository** (if not already done):
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push
   ```

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with your GitHub account
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Netlify will automatically detect the build settings from `netlify.toml`

3. **Set Environment Variables**:
   - In Netlify dashboard, go to Site settings → Build & deploy → Environment
   - Add environment variable:
     - Key: `GEMINI_API_KEY`
     - Value: Your Gemini API key
   
4. **Deploy**:
   - Netlify will automatically deploy when you push to main branch
   - Or manually trigger a deploy from the dashboard

### Build and Preview Locally

```bash
npm run build
npm run preview
```
