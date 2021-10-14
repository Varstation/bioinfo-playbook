---
sidebar_position: 10
---

# Guia para Criação de Release Notes

The style guide provides formatting guidelines and language suggestions for pipeline changelogs. It is divided into four sections: 1) Changelog Information, which details the types of changes listed in a changelog, 2) Language Usage, which describes language style and syntax for changelog information, 3) Changelog Format, which provides sample formatting for changelog information, and 4) Sample Changelog Entries, which displays two examples of changelog entries taken from the [pipeline-template.RELEASENOTES.md file](https://github.com/Varstation/pipeline-template/blob/main/RELEASENOTES.md).

## Changelog Information

Pipeline changelogs have four informational parts:

### 1) The changelog.md file name

The changelog file name should be consistent across pipelines. The format is `RELASENOTES.md`.

The file name is not included in the actual changelog- it is just the file name.

### 2) The pipeline release version name

- Ex: [RELEASE NOTES](https://github.com/Varstation/pipeline-template/blob/main/RELEASENOTES.md) version name is a number (i.e. "1.0.0")

The version name is listed at the top of each changelog entry section. It should follow [Semantic versioning (SemVer)](https://semver.org/) which uses the major.minor.patch version number.

### 3) The date of last commit (YYYY-MM-DD)

The purpose of the date of last commit is to inform users of the relative timing of changes to the pipeline. This is **not a release date**, which would have to be added to the changelog post-release. This date is updated as each change is created. For each pipeline release in the changelog, there will only be one final commit date (as opposed to a commit date for every change in that particular release).

### 4) Details of the version changes

This section describes (in bullet point format) every type of change made to the pipeline for the current pipeline version. Types of changes include: additions, updates, changes, deprecations, removals, fixes, and security updates. The type of change should be used as the first word of the bullet point (see examples below). These changes should be updated as pipeline changes are made even if the updated pipeline version has not been released. This will enable end-users to see what changes are coming when the new release is published.

If changes are breaking changes to the pipeline (a major version update), this changelog section will be divided into two subsections: "Breaking changes" and "Additional changes". An example of these headers is shown in the [Sample Changelog Entries](#sample-changelog-entries) section.

## Language Usage

All changelog notes should be bulleted (no period at the end of the final sentence of any one bullet point). Each bullet should include one type of change, but more than one sentence can be used to describe the individual change. Bullets should be written in complete sentences, but with the caveat that personal pronouns (“I”, “We”, “They”) are omitted. The first word of each bullet should be capitalized and describe the type of change made (in past tense).

Examples of bullet points:

- "Updated the WDL with the latest docker image”
- "Added an output to the WDL. Users will now see this output after running the WDL"

For all bullet points, use active voice instead of passive voice. Examples are shown below.

Examples of passive voice:
- "Broken link in the StarAlign task **was fixed**"

Example of active voice:
- "**Fixed** the broken link in the StarAlign task"

You can find more examples of active voice from the [University of Wisconsin-Madison's Writing Center](https://writing.wisc.edu/handbook/style/ccs_activevoice/).

## Changelog Format

The following is the markdown format required for all major changelog version updates which have breaking changes:


## Changes

- **Added** for new features.
- **Changed** for changes in existing functionality.
- **Deprecated** for soon-to-be removed features.
- **Removed** for now removed features.
- **Fixed** for any bug fixes.
- **Security** in case of vulnerabilities.

### List the changes

```md
**ADDED**
* "insert description of first breaking pipeline change here"
* "insert description of additional breaking changes here- add more bullets as necessary for additional changes"

```
The following is the markdown format required for non-major changelog version updates with non-breaking changes:

```md
# "insert Release Version Name here"

"insert date of last commit in YYYY-MM-DD here" (Date of Last Commit)

* "insert description of first pipeline change here"
* "insert description of additional change here- add more bullets as necessary for additional changes"
```

## Sample Changelog Entries


Changelog
==========

<!--
Newest changes should be on top.

This document is user facing. Please word the changes in such a way
that users understand how the changes affect the new version.
-->


## [0.1.0] - 2021-10-08
### Added
- Hello-World Pipeline WDL
- CIs (Publish Docs, Release, Build Test)
- BumpVersion integrated
- Tests suites integrated
- Docs integrated

## [0.1.0-rc] - 2021-10-06
### Added
- First draft of the wdl pipeline architecture.