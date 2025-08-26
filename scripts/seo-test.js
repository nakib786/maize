#!/usr/bin/env node

/**
 * SEO Testing Script for Maize Developments
 * This script validates all SEO implementations and provides a comprehensive report
 */

const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

// SEO Test Results
const results = {
  passed: 0,
  failed: 0,
  warnings: 0,
  total: 0
};

// Helper function to log results
function log(message, type = 'info') {
  const timestamp = new Date().toISOString();
  const color = type === 'pass' ? colors.green : 
                type === 'fail' ? colors.red : 
                type === 'warn' ? colors.yellow : colors.blue;
  
  console.log(`${color}[${timestamp}] ${message}${colors.reset}`);
}

// Test functions
function testFileExists(filePath, description) {
  results.total++;
  if (fs.existsSync(filePath)) {
    log(`✅ ${description} - File exists`, 'pass');
    results.passed++;
    return true;
  } else {
    log(`❌ ${description} - File missing`, 'fail');
    results.failed++;
    return false;
  }
}

function testFileContent(filePath, description, requiredContent) {
  results.total++;
  if (!fs.existsSync(filePath)) {
    log(`❌ ${description} - File not found`, 'fail');
    results.failed++;
    return false;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const hasContent = requiredContent.some(item => content.includes(item));
  
  if (hasContent) {
    log(`✅ ${description} - Content found`, 'pass');
    results.passed++;
    return true;
  } else {
    log(`❌ ${description} - Required content missing`, 'fail');
    results.failed++;
    return false;
  }
}

function testMetaTags(filePath, description) {
  results.total++;
  if (!fs.existsSync(filePath)) {
    log(`❌ ${description} - File not found`, 'fail');
    results.failed++;
    return false;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const requiredMetaTags = [
    'title',
    'description',
    'keywords',
    'robots',
    'viewport',
    'og:title',
    'og:description',
    'og:type',
    'og:url',
    'twitter:card',
    'twitter:title',
    'twitter:description'
  ];

  const missingTags = requiredMetaTags.filter(tag => !content.includes(tag));
  
  if (missingTags.length === 0) {
    log(`✅ ${description} - All meta tags present`, 'pass');
    results.passed++;
    return true;
  } else {
    log(`⚠️  ${description} - Missing meta tags: ${missingTags.join(', ')}`, 'warn');
    results.warnings++;
    return false;
  }
}

function testStructuredData(filePath, description) {
  results.total++;
  if (!fs.existsSync(filePath)) {
    log(`❌ ${description} - File not found`, 'fail');
    results.failed++;
    return false;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const requiredSchemas = [
    'Organization',
    'LocalBusiness',
    'WebSite',
    'FAQPage',
    'BreadcrumbList',
    'Service'
  ];

  const missingSchemas = requiredSchemas.filter(schema => !content.includes(schema));
  
  if (missingSchemas.length === 0) {
    log(`✅ ${description} - All structured data schemas present`, 'pass');
    results.passed++;
    return true;
  } else {
    log(`⚠️  ${description} - Missing schemas: ${missingSchemas.join(', ')}`, 'warn');
    results.warnings++;
    return false;
  }
}

function testPerformanceConfig(filePath, description) {
  results.total++;
  if (!fs.existsSync(filePath)) {
    log(`❌ ${description} - File not found`, 'fail');
    results.failed++;
    return false;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const requiredConfigs = [
    'poweredByHeader: false',
    'compress: true',
    'formats: [',
    'deviceSizes: [',
    'imageSizes: [',
    'headers()',
    'redirects()'
  ];

  const missingConfigs = requiredConfigs.filter(config => !content.includes(config));
  
  if (missingConfigs.length === 0) {
    log(`✅ ${description} - All performance configs present`, 'pass');
    results.passed++;
    return true;
  } else {
    log(`⚠️  ${description} - Missing configs: ${missingConfigs.join(', ')}`, 'warn');
    results.warnings++;
    return false;
  }
}

// Main testing function
function runSEOTests() {
  console.log(`${colors.bold}${colors.blue}🔍 Starting SEO Tests for Maize Developments${colors.reset}\n`);

  // Test 1: Essential SEO files
  log(`${colors.bold}📁 Testing Essential SEO Files:${colors.reset}`);
  testFileExists('public/robots.txt', 'Robots.txt file');
  testFileExists('public/sitemap.xml', 'Sitemap.xml file');
  testFileExists('public/manifest.json', 'Web app manifest');
  testFileExists('src/lib/structured-data.ts', 'Structured data file');

  // Test 2: Robots.txt content
  log(`\n${colors.bold}🤖 Testing Robots.txt:${colors.reset}`);
  testFileContent('public/robots.txt', 'Robots.txt content', [
    'User-agent: *',
    'Allow: /',
    'Sitemap:',
    'GPTBot',
    'ChatGPT-User',
    'CCBot',
    'anthropic-ai',
    'Claude-Web'
  ]);

  // Test 3: Sitemap content
  log(`\n${colors.bold}🗺️  Testing Sitemap:${colors.reset}`);
  testFileContent('public/sitemap.xml', 'Sitemap content', [
    '<?xml version="1.0"',
    '<urlset',
    'maizedevelopments.com',
    '<loc>',
    '<lastmod>',
    '<changefreq>',
    '<priority>'
  ]);

  // Test 4: Layout metadata
  log(`\n${colors.bold}📄 Testing Layout Metadata:${colors.reset}`);
  testMetaTags('src/app/layout.tsx', 'Layout.tsx meta tags');

  // Test 5: Structured data
  log(`\n${colors.bold}🏗️  Testing Structured Data:${colors.reset}`);
  testStructuredData('src/lib/structured-data.ts', 'Structured data schemas');

  // Test 6: Next.js configuration
  log(`\n${colors.bold}⚙️  Testing Next.js Configuration:${colors.reset}`);
  testPerformanceConfig('next.config.ts', 'Next.js performance config');

  // Test 7: SEO components
  log(`\n${colors.bold}🧩 Testing SEO Components:${colors.reset}`);
  testFileExists('src/components/SEOHead.tsx', 'SEOHead component');
  testFileExists('src/components/AIFriendlyContent.tsx', 'AIFriendlyContent component');
  testFileExists('src/components/SEOAnalytics.tsx', 'SEOAnalytics component');

  // Test 8: Package.json scripts
  log(`\n${colors.bold}📦 Testing Package Configuration:${colors.reset}`);
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  results.total++;
  if (packageJson.scripts && packageJson.scripts.build) {
    log('✅ Package.json build script present', 'pass');
    results.passed++;
  } else {
    log('❌ Package.json build script missing', 'fail');
    results.failed++;
  }

  // Test 9: TypeScript configuration
  log(`\n${colors.bold}🔧 Testing TypeScript Configuration:${colors.reset}`);
  testFileExists('tsconfig.json', 'TypeScript configuration');

  // Test 10: Tailwind configuration
  log(`\n${colors.bold}🎨 Testing Tailwind Configuration:${colors.reset}`);
  testFileExists('tailwind.config.ts', 'Tailwind CSS configuration');

  // Generate report
  console.log(`\n${colors.bold}${colors.blue}📊 SEO Test Report${colors.reset}`);
  console.log(`${colors.bold}Total Tests:${colors.reset} ${results.total}`);
  console.log(`${colors.green}✅ Passed:${colors.reset} ${results.passed}`);
  console.log(`${colors.red}❌ Failed:${colors.reset} ${results.failed}`);
  console.log(`${colors.yellow}⚠️  Warnings:${colors.reset} ${results.warnings}`);

  const successRate = ((results.passed / results.total) * 100).toFixed(1);
  console.log(`\n${colors.bold}Success Rate:${colors.reset} ${successRate}%`);

  if (results.failed === 0) {
    console.log(`\n${colors.green}${colors.bold}🎉 All critical SEO tests passed!${colors.reset}`);
  } else {
    console.log(`\n${colors.red}${colors.bold}⚠️  Some SEO tests failed. Please review the issues above.${colors.reset}`);
  }

  // Exit with appropriate code
  process.exit(results.failed > 0 ? 1 : 0);
}

// Run tests if this script is executed directly
if (require.main === module) {
  runSEOTests();
}

module.exports = { runSEOTests };
