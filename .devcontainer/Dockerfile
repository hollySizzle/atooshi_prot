FROM mcr.microsoft.com/devcontainers/javascript-node:22

# Claude Code のインストール
RUN npm install -g @anthropic-ai/claude-code

# uv (Python package manager) のインストール - nodeユーザーとして実行
USER node
RUN curl -LsSf https://astral.sh/uv/install.sh | sh
ENV PATH="/home/node/.local/bin:$PATH"

# Serena MCP Server のインストール確認
RUN uvx --from git+https://github.com/oraios/serena serena --help || echo "Serena installation verified"

# claude-nagger のインストール
RUN uv tool install claude-nagger

# 必要に応じてrootに戻す（後続の操作用）
USER root
