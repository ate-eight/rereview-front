import { ESLint } from 'eslint';

const removeIgnoredFiles = async (files: any[]) => {
    const eslint = new ESLint();
    const isIgnored = await Promise.all(
        files.map((file) => {
            return eslint.isPathIgnored(file);
        }),
    );
    const filteredFiles = files.filter((_, i) => !isIgnored[i]);
    return filteredFiles.join(' ');
};

const settingIgnoreFiles = async (files: any[]) => {
    const filesToLint = await removeIgnoredFiles(files);
    return [`eslint --max-warnings=0 ${filesToLint}`];
};

export { removeIgnoredFiles, settingIgnoreFiles };
