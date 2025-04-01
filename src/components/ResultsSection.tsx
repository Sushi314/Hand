import React from 'react';

const ResultsSection: React.FC = () => (
  <section id="results">
    <h1>Results</h1>
    <p>Survey data was analyzed using a spreadsheet to calculate values across various criteria. Gender had the most significant impact on views of handshakes, with 80% of men and 63% of women reporting that they like handshakes. However, this does not necessarily indicate that they use or prefer handshakes, as other greeting preferences must be considered. Only 10.25% of participants both like, prefer, and do not feel pressured to shake hands. When broken down by gender, only 2.56% of women and 3.85% of men fell into this category. However, when analyzing preferences by only one setting, there is a notable shift, to 29.48% of participants favoring handshakes in formal settings, while only 7.69% prefer them in casual settings (See Table 1.1) </p>
    
    <div className="table-responsive">
    <h3>Table 1.1 – Gender Difference in Handshakes</h3>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Total</th>
          <th>Men</th>
          <th>Women</th>
          <th>Trans and Non-Binary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Like Handshakes</td>
          <td>65.79%</td>
          <td>80%</td>
          <td>63.64%</td>
          <td>28.57%</td>
        </tr>
        <tr>
          <td>Dislike Handshakes</td>
          <td>34.21%</td>
          <td>20%</td>
          <td>36.36%</td>
          <td>71.43%</td>
        </tr>
        <tr>
          <td>Prefer Handshakes in both Casual and Formal Settings*</td>
          <td>10.25%</td>
          <td>3.84%</td>
          <td>2.56%</td>
          <td>0%</td>
        </tr>
        <tr>
          <td>Prefer Formal Handshakes *</td>
          <td>29.48%</td>
          <td>15.38%</td>
          <td>12.82%</td>
          <td>50%</td>
        </tr>
        <tr>
          <td>Prefer Casual Handshakes *</td>
          <td>7.69%</td>
          <td>5.12%</td>
          <td>2.56%</td>
          <td>0%</td>
        </tr>
      </tbody>
    </table>
    <p>* Percentages of total respondents that like, and don’t feel pressured to shake hands. </p>
  </div>
  <p>Alternatively, when analyzing preferred greetings in formal and casual settings, only men in formal settings showed a strong preference for handshakes, with 72% favoring them. In contrast, among women in formal settings, only 25% preferred handshakes, while 38.6% favored a verbal-only greeting (See Table 1.2). In casual settings, preference for handshakes decreased dramatically across all genders (See Table 1.3). This suggests that setting plays a key role in greeting preferences, a trend further supported by write-in responses such as: “Depends on the situation,” “Depends on the person,” and “Depends on closeness to the person.” Interestingly, the data also reveal that 26% of men who prefer handshakes feel pressured to shake hands in formal settings, with that number increasing to 43% in casual settings. This raises an important question: Why do people prefer handshakes if they feel, or somewhat feel, pressured to engage in them; a subject for future study. </p>

    <div className="table-responsive">
    <h3>Table 1.2 – Formal Greeting Preferences</h3>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Total</th>
          <th>Men</th>
          <th>Women</th>
          <th>Trans and Non-Binary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Handshakes</td>
          <td>39.7%</td>
          <td>72%</td>
          <td>25%</td>
          <td>22.2%</td>
        </tr>
        <tr>
          <td>Verbal Only</td>
          <td>30.8%</td>
          <td>16%</td>
          <td>38.6%</td>
          <td>33.3%</td>
        </tr>
        <tr>
          <td>Hug</td>
          <td>9%</td>
          <td>4%</td>
          <td>11.4%</td>
          <td>11.1%</td>
        </tr>
        <tr>
          <td>Other</td>
          <td>20.5%</td>
          <td>8%</td>
          <td>25%</td>
          <td>33.4%</td>
        </tr>
      </tbody>
    </table>
    </div>

  <div className="table-responsive">
    <h3>Table 1.3 – Casual Greeting Preferences</h3>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Total</th>
          <th>Men</th>
          <th>Women</th>
          <th>Trans and Non-Binary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Handshakes</td>
          <td>11.5%</td>
          <td>28%</td>
          <td>4.5%</td>
          <td>0%</td>
        </tr>
        <tr>
          <td>Verbal Only</td>
          <td>32.1%</td>
          <td>24%</td>
          <td>38.6%</td>
          <td>22.2%</td>
        </tr>
        <tr>
          <td>Hug</td>
          <td>30.8%</td>
          <td>16%</td>
          <td>40.9%</td>
          <td>22.2%</td>
        </tr>
        <tr>
          <td>Other</td>
          <td>25.6%</td>
          <td>32%</td>
          <td>16%</td>
          <td>55.6%</td>
        </tr>
      </tbody>
    </table>
    </div>
    <p>Next, the data was evaluated to determine whether public perception of handshakes is changing. The first factor assessed was the impact of COVID-19 on people's perceptions, which revealed a 50-50 split with no correlation to age (See Table 1.4). Additionally, the effect was consistent across age groups, indicating that assessing changes in handshake norms over time will not be influenced by the impact of COVID-19. This analysis of survey responses suggests a correlation between age and perceptions of the handshake norm’s relevance. Notably, 70% of respondents aged 45–54 stated that the norm is not outdated, compared to 42.9% of those under 24 (See Table 1.5). Additional data collection would be necessary to conduct a statistical analysis and determine whether this association is statistically significant. </p>

    <div className="table-responsive">
    <h3>Table 1.4 – COVID’s Influence on Handshake Perception vs Age</h3>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Total</th>
          <th>Under 24</th>
          <th>25-34</th>
          <th>35-44</th>
          <th>45-54</th>
          <th>Over 55</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Yes</td>
          <td>50%</td>
          <td>42.9%</td>
          <td>70%</td>
          <td>70%</td>
          <td>30%</td>
          <td>71.4%</td>
        </tr>
        <tr>
          <td>No</td>
          <td>50%</td>
          <td>57%</td>
          <td>30%</td>
          <td>30%</td>
          <td>70%</td>
          <td>28.6%</td>
        </tr>
      </tbody>
    </table>
    </div>

    <div className="table-responsive">
    <h3>Table 1.5 – Is the Handshake an Outdated Norm?</h3>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Total</th>
          <th>Under 24</th>
          <th>25-34</th>
          <th>35-44</th>
          <th>45-54</th>
          <th>Over 55</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Yes</td>
          <td>29.5%</td>
          <td>42.9%</td>
          <td>25%</td>
          <td>35%</td>
          <td>10%</td>
          <td>28.6%</td>
        </tr>
        <tr>
          <td>No</td>
          <td>43%</td>
          <td>42.9%</td>
          <td>40%</td>
          <td>30%</td>
          <td>70%</td>
          <td>50%</td>
        </tr>
        <tr>
          <td>Unsure</td>
          <td>27.5%</td>
          <td>14.3%</td>
          <td>35%</td>
          <td>35%</td>
          <td>20%</td>
          <td>21.4%</td>
        </tr>
      </tbody>
    </table>
    </div>
    <p>Finally, an unexpected result emerged regarding the preference for hugs in casual settings, as shown in Table 1.3. Both verbal greetings and hugs were the were popular choices, with 32.1% and 30.8%, of total responses. However, when broken down by gender, a clear difference appeared, 40.9% of women preferred hugs as their primary greeting method, whereas only 16% of men shared this preference. </p>
  </section>
);

export default ResultsSection;
