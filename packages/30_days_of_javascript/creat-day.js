const fs = require("fs").promises;
const path = require("path");

const dayNumber = process.argv[2];

if (!dayNumber || isNaN(dayNumber) || dayNumber < 1 || dayNumber > 30) {
  console.error("用法: node create-day.js <天数> (1-30)");
  process.exit(1);
}

function formatDate() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(
    now.getDate()
  )} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
}

// 使用字符串分割法 - 更易调试
async function readPreviousDayPlan(day) {
  if (day === 1) return null;

  const prevFolder = `day-${day - 1}`;
  const prevFilePath = path.join(process.cwd(), prevFolder, "README.md");

  try {
    const content = await fs.readFile(prevFilePath, "utf8");

    const startMarker = "## What's my plan for tomorrow?";
    const endMarker = "## Are there any questions?";

    const startIndex = content.indexOf(startMarker);
    if (startIndex === -1) return null;

    const contentAfterStart = content.slice(startIndex + startMarker.length);
    const endIndex = contentAfterStart.indexOf(endMarker);

    const plan =
      endIndex === -1
        ? contentAfterStart.trim()
        : contentAfterStart.slice(0, endIndex).trim();

    // 移除开头的空行
    return plan.replace(/^\n+/, "") || null;
  } catch (err) {
    return null;
  }
}

function generateTemplate(day, previousPlan) {
  const planContent = previousPlan ? `\n${previousPlan}\n` : "";

  return `# Day-${day}

## Learning Log

- 时间：${formatDate()}
- 内容：
  - 

## What I have learned?${planContent}

## What's my plan for tomorrow?

## Are there any questions?
`;
}

async function createChallengeDay(day) {
  const folderName = `day-${day}`;
  const filePath = path.join(process.cwd(), folderName, "README.md");

  try {
    const previousPlan = await readPreviousDayPlan(day);
    await fs.mkdir(folderName, { recursive: true });
    await fs.writeFile(filePath, generateTemplate(day, previousPlan), "utf8");

    if (previousPlan) {
      console.log(
        `✅ 创建成功: ${folderName}/README.md (已复制 ${day - 1} 天计划)`
      );
    } else {
      console.log(`✅ 创建成功: ${folderName}/README.md`);
    }
  } catch (error) {
    console.error(`❌ 创建失败: ${error.message}`);
    process.exit(1);
  }
}

createChallengeDay(dayNumber);
