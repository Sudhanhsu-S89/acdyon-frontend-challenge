var menuToggle = document.getElementById('menu-toggle');
var navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', function () {
    var isOpen = navLinks.classList.toggle('open');
    menuToggle.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

var runButton = document.getElementById('run-button');
var badge = document.getElementById('workflow-badge');
var steps = document.querySelectorAll('.workflow-step');
var statusLastRun = document.getElementById('status-last-run');
var statusDuration = document.getElementById('status-duration');
var workflowTitle = document.getElementById('workflow-title');
var sidebarItems = document.querySelectorAll('.sidebar-item');

var workflows = {
    'Deploy Pipeline': {
        duration: '12s',
        lastRun: '3 min ago',
        steps: [
            { name: 'Collect inputs', meta: '3 data sources' },
            { name: 'Run checks', meta: '5 validations' },
            { name: 'Publish update', meta: '2 targets' }
        ]
    },
    'Onboard Member': {
        duration: '4s',
        lastRun: '1 hour ago',
        steps: [
            { name: 'Invite account', meta: '1 user' },
            { name: 'Assign role', meta: 'Admin permissions' },
            { name: 'Send welcome', meta: 'Slack & Email' }
        ]
    },
    'Weekly Report': {
        duration: '8s',
        lastRun: 'Yesterday',
        steps: [
            { name: 'Aggregate metrics', meta: '4 dashboards' },
            { name: 'Generate PDF', meta: 'Summary stats' },
            { name: 'Notify team', meta: 'Slack channel' }
        ]
    },
    'Integrations': {
        duration: '1s',
        lastRun: 'Active',
        steps: [
            { name: 'Connect GitHub', meta: 'Authenticated' },
            { name: 'Sync Slack', meta: 'Connected' },
            { name: 'Verify Webhook', meta: '2 endpoints active' }
        ]
    }
};

var currentWorkflow = 'Deploy Pipeline';
var isRunning = false;

sidebarItems.forEach(function (item) {
    item.addEventListener('click', function () {
        if (isRunning) return;

        var name = item.textContent.trim();
        if (!workflows[name]) return;

        sidebarItems.forEach(function (el) {
            el.classList.remove('active');
        });
        item.classList.add('active');

        currentWorkflow = name;
        loadWorkflow(name);
    });
});

function loadWorkflow(name) {
    var data = workflows[name];
    workflowTitle.textContent = name;
    statusLastRun.textContent = 'Last run: ' + data.lastRun;
    statusDuration.textContent = 'Duration: ' + data.duration;

    steps.forEach(function (step, i) {
        step.classList.remove('running', 'complete');
        step.querySelector('.step-name').textContent = data.steps[i].name;
        step.querySelector('.step-meta').textContent = data.steps[i].meta;
    });

    badge.textContent = 'Ready';
    badge.className = 'workflow-badge';
    runButton.textContent = '▶ Run workflow';
    runButton.className = 'run-button';
}

runButton.addEventListener('click', function () {
    if (isRunning) return;
    isRunning = true;

    runButton.textContent = 'Running\u2026';
    runButton.classList.add('running');
    badge.textContent = 'Running';
    badge.className = 'workflow-badge running';
    statusLastRun.textContent = 'Running now';

    runStep(0);
});

function runStep(index) {
    if (index >= steps.length) {
        completeWorkflow();
        return;
    }

    steps[index].classList.add('running');
    steps[index].querySelector('.step-meta').textContent = 'Running\u2026';

    setTimeout(function () {
        steps[index].classList.remove('running');
        steps[index].classList.add('complete');
        steps[index].querySelector('.step-meta').textContent = 'Done';
        runStep(index + 1);
    }, 900);
}

function completeWorkflow() {
    runButton.textContent = '\u2713 Completed';
    runButton.classList.remove('running');
    runButton.classList.add('complete');
    badge.textContent = 'Completed';
    badge.className = 'workflow-badge complete';
    statusLastRun.textContent = 'Last run: just now';

    setTimeout(resetWorkflow, 3000);
}

function resetWorkflow() {
    loadWorkflow(currentWorkflow);
    isRunning = false;
}

var konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
];
var konamiIndex = 0;

document.addEventListener('keydown', function (e) {
    var expected = konamiCode[konamiIndex];
    var pressed = e.key.length === 1 ? e.key.toLowerCase() : e.key;

    if (pressed === expected) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            var toast = document.getElementById('easter-egg');
            toast.classList.add('visible');
            toast.setAttribute('aria-hidden', 'false');
            setTimeout(function () {
                toast.classList.remove('visible');
                toast.setAttribute('aria-hidden', 'true');
            }, 3000);
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});
